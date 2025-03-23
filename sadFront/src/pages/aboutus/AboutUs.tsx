import {Ali, Amir, Arman, Armin, Kourosh, Other, Pedram, Sadra, Saleh, Sara} from "../../assets/images"
import { Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";

import { AboutUsProfessor } from "../../assets/images";
import { AboutUsStudent } from "../../assets/images";
import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";

function AboutUs() {
    const teamMembers1 = [
        { name: 'Ali Alizadeh', img: Ali },
        { name: 'Arman Zarkalam', img: Arman },
        { name: 'Armin Afzali', img: Armin },
        { name: 'Sadra Dadkhah', img: Sadra },
        { name: 'Pedram Khojastehrad', img: Pedram },

    ];
    const teamMembers2 = [
        { name: 'Kourosh Taghipour', img: Kourosh },
        { name: 'Saleh Pajand', img: Saleh },
        { name: 'Amir fakharzadeh', img: Amir },
        { name: 'Sara Younesi', img: Sara },
        { name: 'Other Developers', img: Other },



    ];
    return (
        <Grid style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            <Navbar showAuthButtons={true} />
            
            <Container sx={{height: '350px'}}>
                
                <Paper elevation={3} sx={{ marginTop: '7rem', padding: '4rem', background: 'linear-gradient(45deg, #0F1035 40%, #1e88e5 90%)' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: '#fff', textAlign: 'center', display:'flex', justifyContent:'flex-start', }}>
                        Our Story
                    </Typography>
                    
                    <Typography sx={{ color: '#fff',fontSize: '30px', fontWeight: '10', }}>
                        
                        7Apply started its journey in the fall of 2023 with a small team developing an educational support system for student.
                        This team began with students from Iust University. The team had a big goal for students! After a challenging 1-year journey,
                        today 7Apply is closer to its goal and has managed to develop products to help the growth of students.
                        
                    </Typography>
                    
                </Paper>

            </Container>



            <Container sx={{ display: 'flex', alignItems: 'center',height: '700px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ padding: '1rem', boxShadow: 3 }}>
                        <CardContent>

                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            7Apply's Journey Began in Fall 2023 with a Small Team

                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '300%', padding: '2rem', }}>
                        <Box sx={{
                            position: 'absolute',
                            left: '90%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: '#0F1035',
                            color: '#fff',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            2023
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            left: '25%',
                            top: '70%',
                            transform: 'translate(-50%, -50%)',
                            width: '2px',
                            height: '100%',
                            background: '#ff5722'
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            left: '40%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            height: '2px',
                            background: '#ff5722',

                        }} />
                        <Box sx={{
                            position: 'absolute',
                            left: '25%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: '#ff5722',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%'
                        }} />
                    </Box>
                    </Grid>
            </Grid>
        </Container>


        <Container sx={{ display: 'flex', alignItems: 'center', height: '200px',marginTop: '-7.1rem',}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{padding: '1rem', boxShadow: 3 , marginTop:'-5rem'}}>
                        <CardContent>

                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center',}}>
                            7Apply has made the process of communication easier for both students and university professors.
                            
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '300%', }}>
                        <Box sx={{
                            position: 'absolute',
                            left: '90%',
                            top: '10%',
                            transform: 'translate(-50%, -50%)',
                            background: '#0F1035',
                            color: '#fff',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            2024
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            left: '25%',
                            top: '80%',
                            transform: 'translate(-50%, -50%)',
                            width: '2px',
                            height: '100%',
                            background: '#ff5722'
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            left: '40%',
                            top: '10%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            height: '2px',
                            background: '#ff5722',
                            borderTop: "1px solid red",


                        }} />
                        <Box sx={{
                            position: 'absolute',
                            left: '25%',
                            top: '10%',
                            transform: 'translate(-50%, -50%)',
                            background: '#ff5722',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%'
                        }} />
                    </Box>
                    </Grid>
            </Grid>
        </Container>

    <Container sx={{ display: 'flex', flexDirection: 'column',justifyContent:'flex-start', alignItems: 'flex-start',textAlign: 'center' , height: '400px', marginTop:'2rem'}}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
        Contacts
        </Typography>
        
        <Box sx={{ width: '50px', margin: '1rem 1rem 1rem 1rem' }}></Box>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Box>
            <img src={AboutUsProfessor} alt="University professors" style={{ width: '35%' }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                University professors
            </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box>
            <img src={AboutUsStudent} alt="University professors" style={{ width: '35%' }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
            University students
            </Typography>
            </Box>
        </Grid>
        </Grid>
    </Container>

    <Container>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
        Our Team
        </Typography>
        
        <Typography sx={{ color: "white", marginTop: '2rem', marginBottom: '2rem',padding: '1rem', background: 'linear-gradient(45deg, #0F1035 70%, #1e88e5 90%)' , borderRadius:'5px'}}>
        After 1 year since 7Apply started working, today a young,
        energetic and eager team is working hand in hand to expand and empower the student community.
        </Typography>
        
        {/* <Grid sx={{display: 'flex', flexdirection: 'row', justifyContent: 'space-between'}}>
        {teamMembers1.map((member) => (
            <Grid>
            <img src={member.img} alt={member.name}
            style={{ display: 'flex', flexDirection: 'row',width: '150px', height:'150px' , borderRadius:'50%'}}/>
            <Typography variant="h6" gutterBottom >
                {member.name}
            </Typography>
            
            </Grid>
        ))}
        </Grid>

        <Grid sx={{display: 'flex', flexdirection: 'row', justifyContent: 'space-between'}}>
        {teamMembers2.map((member) => (
            <Grid>
            <img src={member.img} alt={member.name}
            style={{ display: 'flex', flexDirection: 'row',width: '150px', height:'150px' , borderRadius:'50%'}}/>
            <Typography variant="h6" gutterBottom>
                {member.name}
            </Typography>
            
            </Grid>
        ))}
        </Grid> */}


    <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        {teamMembers1.map((member) => (
            <Grid item key={member.name} xs={12} sm="auto">
            <img
                src={member.img}
                alt={member.name}
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
            <Typography variant="h6" gutterBottom>
                {member.name}
            </Typography>
            </Grid>
        ))}
        </Grid>

        <Grid container spacing={2} sx={{ justifyContent: 'space-between', marginTop: 2 }}>
        {teamMembers2.map((member) => (
            <Grid item key={member.name} xs={12} sm="auto">
            <img
                src={member.img}
                alt={member.name}
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
            <Typography variant="h6" gutterBottom>
                {member.name}
            </Typography>
            </Grid>
        ))}
        </Grid>
    
    
    </Container>
    
    <Box sx={{marginBottom:'100px'}}>

    </Box>


            <Footer/>
        </Grid>
    );
}

export default AboutUs;
