import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from '../components/Autocomplete';
import renderer from 'react-test-renderer';

describe('<Autocomplete />', () => {
    let props;

    beforeEach(() => {
        props = {
            limit: 25,
            list: [
                {
                    id: 'id-1',
                    value: 'value-1'
                },
                {
                    id: 'id-2',
                    value: 'value-2'
                },
                {
                    id: 'id-3',
                    value: 'value-3'
                },
                {
                    id: 'id-4',
                    value: 'value-4'
                },
                {
                    id: 'id-5',
                    value: 'value-5'
                },
                {
                    id: 'id-6',
                    value: 'value-6'
                },
                {
                    id: 'id-7',
                    value: 'value-7'
                },
                {
                    id: 'id-8',
                    value: 'value-8'
                },
                {
                    id: 'id-9',
                    value: 'value-9'
                },
                {
                    id: 'id-10',
                    value: 'value-10'
                }
            ]
        };
    });

    it('should NOT show suggestions if no search string typed', () => {
        const wrapper = shallow(
            <Autocomplete {...props} />,
        );

        expect(wrapper.find('.list').exists()).toBe(false);
    });

    it('should show 10 suggestions if no search string typed but click on empty input once', () => {
        const wrapper = shallow(
            <Autocomplete {...props} />,
        );

        wrapper.find('input').simulate('click');

        expect(wrapper.find('.list-item').length).toEqual(10);
    });

    it('should show 3 suggestions if no search string typed but click on empty input once and limit is 3', () => {
        const testLimit = 3;
        const wrapper = shallow(
            <Autocomplete {...props} limit={testLimit} />,
        );

        wrapper.find('input').simulate('click');

        expect(wrapper.find('.list-item').length).toEqual(testLimit);
    });

    it('should show 2 suggestions if input`s value is `value-1`', () => {
        const wrapper = shallow(
            <Autocomplete {...props} />,
        );

        wrapper.find('input').simulate('click');
        wrapper.find('input').simulate('change', { target: { value: 'value-1' } });

        expect(wrapper.find('.list-item').length).toEqual(2);
    });

    it('should show match snapshot if input`s value is `value-1`', () => {
        const wrapper = shallow(
            <Autocomplete {...props} />,
        );

        wrapper.find('input').simulate('click');
        wrapper.find('input').simulate('change', { target: { value: 'value-1' } });

        expect(wrapper).toMatchSnapshot();
    });
});