import React, { useEffect, useState } from 'react'

import PageContainer from '../components/page_container'
import Gallery from 'react-photo-gallery';
// import Carousel, { Modal, ModalGateway } from "react-images";
import { Carousel } from 'react-responsive-carousel';
import { Modal, Image } from 'semantic-ui-react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const API_KEY = process.env.REACT_APP_IMGUR_CLIENT_ID

const ALBUM_ID = '40VLGap'

const Pics = () => {
  const [photos, setPhotos] = useState([{
    src: 'https://imgur.com/Lkbtiqo',
    height: 360,
    width: 540,
  }])
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch(
        `https://api.imgur.com/3/album/${ALBUM_ID}/images`,
        {
          headers: new Headers({
            'Authorization': `Client-ID ${API_KEY}`,
          })
        }
      );
      const photos = response.json().data.map(photo => (
        { src: photo.link, height: photo.height, width: photo.width }
      ));
      setPhotos( photos )
    }
    getPhotos()
  }, [])

  const handleOpenLightbox = (_, { index }) => {
    setViewerOpen(true)
    setCurrentImage(index)
  }

  const handleCloseLightbox = () => {
    setViewerOpen(false)
    setCurrentImage(0)
  }

  return (
    <React.Fragment>
      <PageContainer textAlign='center'>
        <Gallery photos={photos} direction={'column'} onClick={handleOpenLightbox} />  
      </PageContainer>
      <Modal className='carouselModal' open={ viewerOpen } 
        onClose={handleCloseLightbox} >
          <Carousel selectedItem={currentImage} 
              showIndicators={false} infiniteLoop={false} dynamicHeight={true}
              showThumbs={false} >
            {photos.map(({src}) => (
              <Image src={src} className='carouselImage' />
            ))}
          </Carousel>
      </Modal>
    </React.Fragment>
  )
}

export default Pics
