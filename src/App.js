import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components'
import youtube from './api/youtube'


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('babies')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                request: searchTerm
            }
        });
        // console.log(response.data.items)
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {              // RENDER FUNCTION
        return (            // RETURN STATEMENT
            <div>
                <Grid justify="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={this.state.selectedVideo} />
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}




export default App
