import React from 'react'

import PageContainer from '../components/page_container'
import Gallery from 'react-photo-gallery';

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

  render() {
    return (
      <PageContainer textAlign='center'>
        <Gallery photos={this.state.photos} direction={'column'} />  
      </PageContainer>
    )
  }  
}

export default Pics