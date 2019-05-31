import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text
} from 'react-native';
import Row from './Row';
import moment from 'moment';


const demoData = [
  {
    title: 'Poster Satu',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum SATU is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Dua',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum DUA is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Tiga',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum TIGA is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Empat',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum EMPAT is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Lima',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum LIMA is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Enam',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum ENAM is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Tujuh',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum TUJUH is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Delapan',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum DELAPAN is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Sembilan',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum SEMBILAN is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Poster Sepuluh',
    image: 'https://dummyimage.com/740x290/000/fff.png',
    large: 'https://dummyimage.com/1152x864/000/fff.png',
    plot: "Lorem Ipsum SEPULUH is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default class List extends Component {

  /**
   * Store the data for ListView
   */
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    isRefreshing: false,
  }

  /**
   * Call _fetchData after component has been mounted
   */
  componentDidMount() {
    this._fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
  _fetchData = () => {
    this.setState({ isRefreshing: true });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(demoData),
      isRefreshing: false,
    })
  }

  /**
   * Render a row
   */
  _renderRow = (movie) => {
    return (
      <Row
      movie={movie}
      onPress={()=>{
        this.props.navigator.push({
          name: 'movie',
          movie: movie,
        });
      }}
      />
    );
  }

  /**
   * Renders the list
   */
  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      refreshControl={
        <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this._fetchData}
        />
      }
      />
    );
  }
}
