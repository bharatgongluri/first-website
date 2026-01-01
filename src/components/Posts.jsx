const posts = () => {
  return (
    <section className="postheader" >
      <div className="postheader1">
        <h1 className="recent-post">Recent posts</h1>
        <h5><a href="#view">view all</a></h5> 





      </div>
      <div className="postgrid">
        <div className="postcard">
          <h1>making a design system from scartch</h1>
          <small>12 feb 2020 | design,patterns</small>
          <p>After taking this course, as a UX Designer,
             you'll be equipped with the knowledge of
             structuring a DS and creating a library of 
             UI components that can scale. As a developer,
             you'll be able to ship your very first DS-driven application.
          </p>
          
        </div>
        <div className="postcard">
            <h1>creating pixel perfect icons in figms</h1>
            <small>12 feb 2020 | figma, icon design</small>
            <p>In this course, you’re going to learn everything
               about user interface design with Figma. Step-by-step,
                we’ll cover everything you need to know from opening
                 the program for the very first time to finalising your
                  finished design.


            </p>
          </div>
      </div>


    </section>

    
  );
};

export default posts;
