import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail } from './components'
// import VideoList from './components/VideoList'
import youtube from './api/youtube'


class App extends Component {
    state = {
        video: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAGKQOVV6uMFFOhWgJzVyUwhwoVYPOiqJA',
                //key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc',
                request: searchTerm
            }
        });

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
                                <VideoDetail />
                            </Grid>
                            <Grid item xs={4}>
                                {/* VIDEO LIST */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}




export default App
