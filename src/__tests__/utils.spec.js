import { getSuggestions } from '../utils/utils';

describe('getSuggestions', () => {
    let list;
    let limit;
    
    beforeEach(() => {
        limit = 3;
        list = [
            {
                id: 'id-1',
                value: 'value-12345'
            },
            {
                id: 'id-2',
                value: 'value-1134'
            },
            {
                id: 'id-3',
                value: 'value-11267'
            },
            {
                id: 'id-4',
                value: 'value-2492949'
            },
            {
                id: 'id-5',
                value: 'value-2222'
            }
        ];
    });

    it('should return an array with first 3 items (according to limit variable', () => {
        const result = [
            {
                id: 'id-1',
                value: 'value-12345'
            },
            {
                id: 'id-2',
                value: 'value-1134'
            },
            {
                id: 'id-3',
                value: 'value-11267'
            }
        ];

        expect(getSuggestions({ list, limit, searchString: '' })).toEqual(result);
    });

    it('should return an array with 2 items', () => {
        const result = [
            {
                id: 'id-2',
                value: 'value-1134'
            },
            {
                id: 'id-3',
                value: 'value-11267'
            }
        ];

        expect(getSuggestions({ list, limit, searchString: '11' })).toEqual(result);
    });

    it('should return an empty array', () => {
        expect(getSuggestions({ list, limit, searchString: 'qweqweqwe' })).toEqual([]);
    });
});