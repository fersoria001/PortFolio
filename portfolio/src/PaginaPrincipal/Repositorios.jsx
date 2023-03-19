import React, { useEffect, useState } from 'react'



const Repositorios = () => {
    const [repos, setRepos] = useState('');

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch('https://api.github.com/users/fersoria001/repos?');
            const data = await response.json();
            data.sort(function(a,b) {
                return new Date(b.pushed_at) - new Date(a.pushed_at);
            })
            setRepos(data);
        };
        fetchRepos().catch(console.erro);
    }, []);

    console.log(repos)
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">

                    {repos && <><img src={repos[0].owner.avatar_url} className='img-fluid border' alt='avatar'></img>
                            <h4 className='text-center mt-2'>{repos[0].owner.login}</h4>
                            <a  rel="noreferrer" target="_blank" href={repos[0].owner.html_url} className='text-decoration-none'> Go to gitHub </a>
                            </>
                    }
                </div>
                <div className="col-10">
                    <div className='container border border-primary'>
                        {repos &&
                            repos.slice(0,5).map(function (repo) {
                                return <div key={repos.indexOf(repo)} className='row d-flex my-2 border border-primary'>
                                    <div className='col'>
                                        <p className='text'>{repo.full_name}</p>
                                        <p>{repo.language}</p>
                                    </div>
                                    <div className='col'>
                                        <p>Last update: {repo.pushed_at}</p>
                                    </div>
                                    <div className='col d-flex justify-content-end'>
                                        <span className='d-inline-flex justify-content-end'>
                                        <p>Stars counter: {repo.stargazers_count}</p>
                                        <a rel="noreferrer" target="_blank" className="d-flex gap-2" href={repo.html_url}><i class="bi bi-star"></i><i class="bi bi-box-arrow-up-right"></i></a>
                                        </span>

                                       
                                    </div>
                                </div>
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repositorios

