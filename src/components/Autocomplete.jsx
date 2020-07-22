import React, { useState, useMemo, useRef, useEffect } from 'react';
import { getSuggestions } from '../utils/utils';

const Autocomplete = ({ list, limit }) => {
    const [searchString, setSearchString] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const listWrap = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleInputChange = ({ target }) => {
        setSearchString(target.value);
    };

    const handleClickOutside = event => {
        const { current } = listWrap;

        if (current && !current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const handleInputClick = () => {
        if (!searchString) {
            setIsVisible(!isVisible);
        }
    };

    const suggestionsList = useMemo(() =>
        getSuggestions({ list, limit, searchString })
    , [searchString, list, limit]);
    
    return (
        <div className="autocomplete-container" ref={listWrap}>
            <h2>Autocomplete by Misha Velmik</h2>
            <input
                placeholder="Type here to search (try with numbers)"
                value={searchString}
                onChange={(handleInputChange)}
                onClick={handleInputClick}
            />
            {isVisible && (
                <div className="list">
                    {suggestionsList
                        .map(({ id, value }) => (
                            <div
                                key={id}
                                onClick={() => setSearchString(value)}
                                className="list-item"
                            >
                                {value}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
};

export default Autocomplete;