import React from 'react';
import SongExample from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                     <SongExample />
                </div>
            </div>
        </div>
    );
};

export default App;