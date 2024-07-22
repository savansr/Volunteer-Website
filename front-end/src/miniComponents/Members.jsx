import React from 'react'

const Members = () => {
    const members=[
        {
          id:1,
          image:'/m1.jpg',
          title:'Alexa'
        },
        {
          id:2,
          image:'/m2.jpg',
          title:'John'
        },
        {
          id:3,
          image:'/m3.jpg',
          title:'Michael'
        },

        {
          id:4,
          image:'/m4.jpg',
          title:'Rober'
        },

        {
          id:5,
          image:'/m5.jpg',
          title:'Siri'
        },

        {
          id:6,
          image:'/m6.jpg',
          title:'Tobey'
        },

        {
          id:7,
          image:'/m4.jpg',
          title:'Jack'
        },
    ];

  return(
   <>
     <section className='members'>
      <div className="container">
        <div className="heading_section">
           <h2 className='heading'>MEMBERS</h2>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Aliquam ipsum nemo vel omnis? Quasi, sint atque quia consequatur
              quibusdam dolor?</p>
        </div>
          <div className="members_container">
           {
              members.map(element=>(
                  <div className="card" id={element.id}>
                    <img src={element.image} alt={element.title} />
                    <h3>{element.title}</h3>
                  </div>

              ))

              

           }

          </div>
      </div>
     </section>
   
   
   </>


  )


  return (
    <div>
      
    </div>
  )
}

export default Members;
