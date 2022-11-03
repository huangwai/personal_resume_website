import React, { Component } from 'react';
export default class Interests extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="interests">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    {
                                        resumeData.interests && resumeData.interests.map((item)=>{
                                            return(
                                                <li>
                                                    <blockquote>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </blockquote>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div> {/* div.flexslider ends */}
                        </div> {/* div.flex-container ends */}
                    </div> {/* row ends */}
                </div>  {/* text-container ends */}
            </section>
        );
    }
}