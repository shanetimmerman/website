import React from 'react'

import PageContainer from '../components/page_container'
import Gallery from 'react-photo-gallery';
// import Carousel, { Modal, ModalGateway } from "react-images";
import { Carousel } from 'react-responsive-carousel';
import { Modal, Image } from 'semantic-ui-react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const API_KEY = process.env.REACT_APP_IMGUR_CLIENT_ID

const ALBUM_ID = '40VLGap'

class Pics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{
        src: 'https://imgur.com/Lkbtiqo',
        height: 360,
        width: 540,
      }],
      currentImage: 0,
      viewerOpen: false,
    }
  }

  componentDidMount() {
    fetch(
      `https://api.imgur.com/3/album/${ALBUM_ID}/images`,
      {
        headers: new Headers({
          'Authorization': `Client-ID ${API_KEY}`,
        })
      }
    ).then(response => response.json())
    .then(data => {
      const photos = data.data.map(photo => (
        { src: photo.link, height: photo.height, width: photo.width }
      ));
      this.setState({ photos: photos })
    })
  }

  openLightbox(event, { photo, index }) {
    this.setState({ currentImage: index, viewerOpen: true });
  }

  closeLightbox() {
    this.setState({ currentImage: 0, viewerOpen: false });
  }

  render() {
    return (
      <div>
        <PageContainer textAlign='center'>
          <Gallery photos={this.state.photos} direction={'column'} onClick={(event, { photo, index }) => (
            this.setState({ currentImage: index, viewerOpen: true })
          )} />  
        </PageContainer>
        <Modal className='carouselModal' open={ this.state.viewerOpen } 
          onClose={() => this.setState({ viewerOpen: false, currentImage: 0})} >
            <Carousel selectedItem={this.state.currentImage} 
                showIndicators={false} infiniteLoop={false} dynamicHeight={true}
                showThumbs={false} >
              {this.state.photos.map(img => (
                  <Image src={img.src} className='carouselImage' />
              ))}
            </Carousel>
        </Modal>
      </div>
    )
  }  
}

export default Pics
