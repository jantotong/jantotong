import React, {Component} from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="city">{education.city}</p>
                    <p className="info">{education.degree} <span>&bull;</span><em
                        className="date">{education.graduated}</em></p>
                    <br/>
                </div>
            })

            var work = this.props.data.work.map(function (work) {
                var des_arr = work.description;
                var des_list = des_arr.map(function (single_des) {
                    return <li>{single_des}</li>;
                })
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <ul>{des_list}</ul>
                </div>
            })

            var skills = this.props.data.skills.map(function (skill) {
                return <div className="each_skill"><h1>{skill.title}</h1><img className="skill_image" src={"images/"+skill.image} alt={skill.alt}/><h2>{skill.description}</h2>
                 </div>
            })

        }

        return (
            <section id="resume">

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div id="skills-wrapper" class="skills">
                        {skills}
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
