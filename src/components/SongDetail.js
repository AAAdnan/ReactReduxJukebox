import React from 'react';
import { connect } from 'react-redux';
import { statement } from '@babel/template';

const SongDetail = (props) => {
    return <div>Song Detail</div>;
};

const mapStateToProps = () => {
    return { song: statement.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);