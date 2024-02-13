import './team.css'
import Member1 from './1.jpg';
import Member2 from './2.jpg';
import Member3 from './3.jpg';



import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Paper } from '@mui/material';

export default function Model1() {
  return (
    // <Paper elevation={24}
    //   sx={{
    //     position: "relative",
    //     backgroundColor: 'grey.900',
    //     color: '#fff',
    //     mb: 4,
    //     backgroundSize: 'cover',
    //     backgroundRepeat:'repeat',
    //     backgroundPosition: 'center',
    //     backgroundImage: `url(${image})`,
    //     width: 'auto',
    //     height: 1100,
    //   }}
    // >
    <div id='model1'>
        <h1 className='model-title'>Our Team</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Mahidhar Reddy</h1>
                     
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member2}/>
            <div className="description">
                <h1>Sai Rithwik</h1>             
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member3}/>
            <div className="description">
                <h1>Dheeraj</h1>
              
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

        
         
          
        </div>
    </div>
    
  );
}