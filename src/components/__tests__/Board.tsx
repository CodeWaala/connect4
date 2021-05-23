import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Props, BoardComponent } from '../Board';
import { resetGame } from '../../actions/resetGame';


describe('Board component', () => {
    let props: Props;
    beforeEach(() => {
        props = {
            board: [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null]
            ],
        color: 'red',
        winner: null,
        dropCoin: jest.fn(),
        isBoardFull: false,
        resetGame: jest.fn(),
        updateScoreBoard: jest.fn(),
        scoreBoard: { 'red': 0, 'yellow': 0}
        }
    });


    it('renders correctly initial state', () => {
        const wrapper = shallow(<BoardComponent {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('resets the game correctly', () => {
        const wrapper = mount(<BoardComponent {...props} />);
        wrapper.find('button').simulate('click');
        expect(props.resetGame).toHaveBeenCalledTimes(1);
    });
});