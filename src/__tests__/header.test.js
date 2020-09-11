import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/parts/header';


describe("Header tests", () => {
  const title = "test title";
  const props = { showHome: true, title: title };
  const props2 = { showHome: false };

  const header = shallow(<Header {...props} />);
  const header2 = shallow(<Header {...props2} />);

  it('renders .app-title', () => {
    expect(header.find('h2').props().children).toEqual('Flashcard Pro');
  });

  it('home link is present, visible or not', () => {
    expect(header.find('Link').hasClass('home-link')).toEqual(true);
  });

  it("home link is visible", () => {
    expect(header.find('Link').hasClass("hidden")).toEqual(false);
  });

  it("home link isn't visible", () => {
    expect(header2.find('Link').hasClass("hidden")).toEqual(true);
  });

  it("display title in .stack-title", () => {
    expect(header.find('h3').props().children).toEqual(title);
  });

  it("doesn't render .stack-title", () => {
    expect(header2.find('h3').hasClass('block')).toBe(false);
  });


});