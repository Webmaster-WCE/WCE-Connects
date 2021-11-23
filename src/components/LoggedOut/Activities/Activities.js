import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
// import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';


function Activities() {
    // const history= useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <p style={{ fontWeight: "bold", fontFamily: "Montserrat", fontStyle: "italic" }}>
                    <Link to='/activities/form' style={{ color: "#702aff", textDecoration:"none" }}>
                        Select activities that you would like to contribute...
                    </Link>
                </p>
                {/* <Button variant="outlined" color="primary" onClick={()=>{history.push("/activities/form")}}>
                </Button> */}
            </div>
            <div>
                <p style={{ fontSize: "x-large", fontWeight: "bold", fontFamily: "Montserrat" }}>Alumni Activities</p>
            </div>
            <div style={{ textAlign: "left", marginBottom: "50px", borderRadius: "50px", padding: '30px', fontFamily: "Montserrat", maxWidth: "700px", backgroundColor: "#ededed" }}>
                <p style={{ textAlign: "left" }}><strong>1. Serve as the single point of contact (SPOC) for Alumni &amp;
                    Institute:</strong></p>
                <p style={{ textAlign: "left" }}>To reach, engage, and serve all alumni, students by networking with one
                    another for life-long connection between the college and its graduates. For the same, the Committee
                    plans, implements and promotes alumni programs that support campus development, student life, and
                    academic processes. For this, Alumni Committee serves as the single point of contact for alumni and the
                    Institute for all matters related to alumni relations and maintains regular communication with alumni.
                </p>
                <p style={{ textAlign: "left" }}><strong>2. Talks and Meets: </strong></p>
                <p style={{ textAlign: "left" }}>To arrange expert talks, seminars, webinars, and meetings of alumni with current students, which benefits
                    the students in gaining subjective expertise, recent innovations and to provide insight in recent trends
                    and give an oversight of the industry. This also helps students in planning their higher studies
                    accordingly.</p>
                <p style={{ textAlign: "left" }}><strong>3. Employability Assistance:</strong></p>
                <p style={{ textAlign: "left" }}>To keep the alumni network of the institute well informed about the status of current students and
                    requests them for their valuable time to offer career support to current students. This enhances the
                    students’ experience and gives them a modest advantage in today’s tough job market.</p>
                <p style={{ textAlign: "left" }}><strong>4. Mentorship:</strong></p>
                <p style={{ textAlign: "left" }}>To play a significant role in contributing to the mentorship of current students by alumni. Alumni
                    voluntarily work as mentors for current students by guiding in them in their domains of expertise.</p>
                <p style={{ textAlign: "left" }}><strong>5. Portal for Career Opportunities:</strong></p>
                <p style={{ textAlign: "left" }}>The Alumni Committee has created a Portal for career opportunities for students and alumni where the WCE
                    Alumni can post and search Job openings in various areas of their profession.</p>
                <p style={{ textAlign: "left" }}><strong>6. Curriculum Revamping:</strong></p>
                <p style={{ textAlign: "left" }}>To seek guidance of distinguished alumni in framing and revising the curriculum in line with latest
                    outcome-based education paradigm while keeping it simple from implementation point of view to ensurethat
                    the curriculum matches with contemporary industry demands.</p>
                <p style={{ textAlign: "left" }}><strong>7. Faculty Alumni Workshops:</strong></p>
                <p style={{ textAlign: "left" }}>To organize workshops for faculty to update/ enhance themselves with the rapidly growing demands from the
                    industry with assistance from the alumni from respective fields of work.</p>
                <p style={{ textAlign: "left" }}><strong>8. Annual Alumni Meet:</strong></p>
                <p style={{ textAlign: "left" }}>To organize an “Annual Alumni Meet” on the institute campus each year on the Second Saturday of January
                    enabling alumni to revive their nostalgic memories and interact with students and faculty. Similarly,
                    such meets at different places in India and abroad are also being planned.</p>
                <p style={{ textAlign: "left" }}><strong>9. Sponsored Projects:</strong></p>
                <p style={{ textAlign: "left" }}>To provide a platform with the help of alumni for aspirant students to work on live industry projects as
                    a part of their academic requirements to ensure industry readiness of students &amp; enrich the
                    industrial environment in the institute.</p>
                <p style={{ textAlign: "left" }}><strong>10. Awards:</strong></p>
                <p style={{ textAlign: "left" }}>To create an endowment fund to assist needy students with the help of generous alumni to ensure that
                    every eligible student admitted to WCE is able to complete his education without any financial worries.
                </p>
                <p style={{ textAlign: "left" }}><strong>11. Modernization of Labs: </strong></p>
                <p style={{ textAlign: "left" }}>To upkeep the existing laboratory infrastructure in the college to state-of-the-art level by frequently
                    modernizing and removing the obsolescence with the active involvement of alumni for consultation and
                    support.</p>
                <p style={{ textAlign: "left" }}><strong>12. Industrial Visits: </strong></p>
                <p style={{ textAlign: "left" }}>To approach alumni for arrangement of industrial visits which provide exposure to the faculty &amp;
                    students of the actual working environment of industry and insight regarding working of companies.</p>
                <p style={{ textAlign: "left" }}><strong>13. Internships:</strong></p>
                <p style={{ textAlign: "left" }}>Internships are of utmost importance for engineering students and can go a long way in helping them build
                    successful careers. It makes them industry ready. During an internship, student work on real projects,
                    get acquainted with the current market trends; sharpen his/her technical competencies and learn
                    in-demand technical competencies avoid repeats. Apart from this, an internship introduces student to the
                    corporate world, teaches professional ethics and polishes soft skills like communication and
                    interpersonal skills. With an internship, student could become an engineer way before graduation which
                    could prove to be extremely helpful for an effortless adaptation to work environment when he/ she join a
                    full-time job. Alumni committee approaches institute alumni in order to provide internships for current
                    students.</p>
                <p style={{ textAlign: "left" }}><strong>14. Testing and Consultancy: </strong></p>
                <p style={{ textAlign: "left" }}>To approach alumni for enhancing testing and consultancy activity of the institute. Testing &amp;
                    consultancy is a major resource in internal revenue generation for the institute. Capacity building of
                    faculty and infrastructure is necessary to enhance these activities which will be carried out with
                    active support &amp; cooperation of alumni.</p>
                <p style={{ textAlign: "left" }}><strong>15. Involvement in Evaluation Process:</strong></p>
                <p style={{ textAlign: "left" }}>To involve the alumni to transform the evaluation process in outcome-based education context.</p>
                <p style={{ textAlign: "left" }}><strong>16. Industrial Consultancy Committee (ICC):</strong></p>
                <p style={{ textAlign: "left" }}>Industrial Consultancy Committee reviews the course syllabus and suggests necessary modifications to make
                    the course contents industry ready. Alumni committee helps in finding out suitable alumni for working on
                    this important Committee.</p>
                <p style={{ textAlign: "left" }}><strong>17. Industry Institute Interaction: </strong></p>
                <p style={{ textAlign: "left" }}>Better interaction between Technical institutions and industry is the need of the hour. This will have
                    great bearing on the Engineering Curriculum, exposure of industrial atmosphere to engineering students
                    and subsequent placement of young graduating engineers in industries across the country. With the advent
                    of globalization and opening up of Indian economy to outside world, competition among industries has
                    become stiff. To solve their engineering problems, they look up now to Engineering Institutions.
                    Similarly, there is an urgent need to prepare engineering students for jobs in multinational companies,
                    by exposing them to newer technologies and engineering methodologies. These objectives can only be
                    achieved well by bridging the</p>
                <p style={{ textAlign: "left" }}>gap between industry and the academic institute which is one of the
                    objectives of Alumni Committee.</p>
                <p style={{ textAlign: "left" }}><strong>18. Soft Skill Training: </strong></p>
                <p style={{ textAlign: "left" }}>Soft skills are interpersonal skills hardwired to an individual's personality, and they characterize how
                    one interacts with other people in the workplace. Alumni of the institutes working in the Industries can
                    provide best soft skill trainings for current student. Alumni Committee arranges such training sessions.
                </p>
                <p style={{ textAlign: "left" }}><strong>19. Member Academic Board / Board of Studies:</strong></p>
                <p style={{ textAlign: "left" }}>The Academic Council and the Board of Studies (BoS) is the basic constituent of the academic system of an
                    Institute. Its functions will include framing the content of various courses, reviewing, and updating
                    the content from time to time, introducing new courses of study etc. Alumni Committee approaches alumni
                    of the institute and requests them to work as a BoS member.</p>
                <p style={{ textAlign: "left" }}><strong>20. Helping Student Activities:</strong></p>
                <p style={{ textAlign: "left" }}>A collaborative effort between student cell and alumni committee can serve as a valuable bridge for
                    connecting with recent graduates in authentic ways which creates a sustained relationship of engagement.
                    Help of alumni to current students for technical competition like e-Yantra, Gokart, Effi-cycle, BAJA
                    etc. and various students’ club activities enriches the current student’s activities. To create such
                    joint teams of current students and experienced alumni of the institute is one of the objectives of the
                    Alumni committee.</p>
                <p style={{ textAlign: "left" }}><strong>21. Felicitations of Distinguished Alumni: </strong></p>
                <p style={{ textAlign: "left" }}>To felicitate the alumni of the institute by conferring Distinguished Alumni Awards in various fields
                    every year in the Annual Alumni meet.</p>
            </div>
        </div>
        </>
    )
}

export default Activities
