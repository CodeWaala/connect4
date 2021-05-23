import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Props, ScoreBoardComponent } from '../ScoreBoard';


describe('ScoreBoard component', () => {
    let props: Props;
    beforeEach(() => {
        props = {
            scores: {
                red: 0,
                yellow: 1,
            }
        }
    });


    it('renders correctly initial state', () => {
        const wrapper = shallow(<ScoreBoardComponent {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});