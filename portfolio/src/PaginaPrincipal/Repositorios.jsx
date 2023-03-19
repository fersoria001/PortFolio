import React, { useEffect, useState } from 'react'



const Repositorios = () => {
    const [repos, setRepos] = useState('');
    
    useEffect(() => {
        const fetchRepos = async() => {
            const response = await fetch('https://api.github.com/users/fersoria001/repos?');
            const data = await response.json();
            setRepos(data);
        };
        fetchRepos();
    }, []);


   
    console.log(repos)
    return (
        <>  
        <h2> REPOSITORIES </h2>
        <div>
            {
                repos.map(repo => 
                
                    <div key={repos.indexOf(repo)} className='row mt-5 border'>
                        <p className='col-6 me-auto'>{repo.full_name}</p>
                        <p>{repo.html_url}</p>

                    </div>
                )
            }
        </div>
        </>

    )
}

export default Repositorios