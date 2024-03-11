import React from 'react';
import './Values.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import val1 from '../Resources/val.jpg';
import { HiShieldCheck } from 'react-icons/hi';
import { MdCancel, MdAnalytics } from 'react-icons/md';

const Values = () => {
    return (
        <section className="v-wrapper">
            <div className="innerWidth v-container">
                {/* left */}
                <div className="v-left">
                    <div className="image-container">
                        <img src={val1} alt="" />
                    </div>
                </div>
                {/* right */}
                <div className="v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to you</span>
                    <span className="secondaryText">
                        We always ready to help by providing the best services for you. <br />
                        We believe a good place to live can make your life better
                    </span>

                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        <AccordionItem className="accordionItem">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon">
                                        <HiShieldCheck />
                                    </div>
                                    <span className="primaryText">Best interest rates on the market</span>
                                    <div className="icon">
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut <br />occaecat
                                    consequat est minim minim esse tempor laborum consequat <br />esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="accordionItem">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon">
                                        <MdCancel />
                                    </div>
                                    <span className="primaryText">Prevent unstable prices</span>
                                    <div className="icon">
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut <br />occaecat
                                    consequat est minim minim esse tempor laborum consequat <br />esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="accordionItem">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon">
                                        <MdAnalytics />
                                    </div>
                                    <span className="primaryText">Best price on the market</span>
                                    <div className="icon">
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut <br />occaecat
                                    consequat est minim minim esse tempor laborum consequat <br />esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Values;
