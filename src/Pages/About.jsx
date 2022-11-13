import Base from "../Components/Base";

function About() {
    return (<Base>
        <div className="aboutUs" >
            <div className="bgimg1">
                <div className="caption">
                    <span className="border">
                        Hi i am Chad
                    </span>
                </div>
            </div>
            <div style={{ color: "#ffff", backgroundColor: "grey", textAlign: "center", padding: "20px 30px" }}>
                <h3 style={{ textAlign: "center" }}>Parallax Demo</h3>
                <p style={{margin: "15px"}}>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
            </div>

            <div className="bgimg2">
                <div className="caption">
                    <span className="border">
                        Hi 
                    </span>
                </div>
            </div>
            <div style={{}}>
                <div style={{ color: "#fff", 
                height:60,
                display:"flex",
                justifyContent:"center",
                backgroundColor: "grey", textAlign: "center", padding: "20x 30x" }}>
                    <p style={{textAlign:"center",
                     display:"flex",
                     verticalAlign:" middle",
                     justifyContent:"center",
                
                }}>We promote drugs to children.</p>
                </div>
            </div>

        </div>



    </Base>);
}

export default About;