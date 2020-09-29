import React from 'react'

import { Loader, } from 'semantic-ui-react'
import PageContainer from '../components/page_container'
import Gallery from 'react-photo-gallery';

const API_KEY = process.env.REACT_APP_IMGUR_CLIENT_ID

const ALBUM_ID = '40VLGap'

class Pics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
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
      console.log(photos)
      this.setState({ photos: photos })
    })
  }

  render() {
    console.log(this.state.photos)
    console.log(this.state.photos.length)
    return (
      <PageContainer textAlign='center'>
        {/* { this.state.photos.length === 0 ? */}
          <Gallery photos={this.state.photos} />  
          {/* <Loader active /> */}
        {/* } */}
      </PageContainer>
    )
  }  
}

export default Pics