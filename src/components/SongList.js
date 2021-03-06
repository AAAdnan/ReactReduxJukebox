import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const marginStyle = {
    marginTop: '20px'
};

class SongExample extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div style={marginStyle} className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui inverted blue button"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        } )
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongExample);