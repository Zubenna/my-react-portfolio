import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="row" id="row">
          <div className="col-md-6 p-title">
            <h5 className="project-title">{projects.title}</h5>
            <p>{projects.intro}</p>
            <p>{projects.tech}</p>
          </div>
          <div className="overlay col-md-6">
            <img alt={projects.title} src={projectImage} id="pro-img" />
            <div className="pro-link">
              <button className="p-2 mr-3"><a href={projects.live} title={projects.title} target="_blank" rel="noreferrer">Live Version</a></button>
              <button className="p-2"><a href={projects.github} title={projects.title} target="_blank" rel="noreferrer">Github</a></button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div>
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


// return (
//         <div key={projects.title} className="columns portfolio-item">
//           <div className="item-wrap">
//               <img alt={projects.title} src={projectImage} />
//               <div className="overlay">
//                 <div className="portfolio-item-meta">
//                   <h5>{projects.title}</h5>
//                 </div>
//               </div>
//               <div className="link-icon">
//                 <i className="fa fa-link"></i>
//               </div>
//              <p>{projects.intro}</p>
//             <a href={projects.live} title={projects.title} target="_blank" rel="noreferrer">Live Version</a>
//              <a href={projects.github} title={projects.title} target="_blank" rel="noreferrer">Github</a>
//           </div>
//         </div>
//       );
//     });
//   }

//   return (
//     <section id="portfolio">
//       <div className="row">
//         <div className="twelve columns collapsed">
//           <h1>Check Out Some of My Works.</h1>

//           <div
//             id="portfolio-wrapper"
//             className="bgrid-quarters s-bgrid-thirds cf"
//           >
//             {projects}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

