import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  async componentDidMount() {
    const albums = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({ albums: albums.data });
  }

  render() {
    const { albums } = this.state;

    const albumList = albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));

    return <ScrollView>{albumList}</ScrollView>;
  }
}

export default AlbumList;
