import React, { useEffect, useState } from "react";
import '../styles/repositorios.css';

const Repositorios = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch("https://api.github.com/users/fersoria001/repos?");
      const data = await response.json();
      data.sort(function (a, b) {
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      });
      setRepos(data);
    };
    fetchRepos().catch(console.error);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = repos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="repositorios-container">
      <div className="profile-container">
        <div className="profile-section">
          {repos.length > 0 && 
            <>
              <img
                src={repos[0].owner.avatar_url}
                className="img-fluid border owner-avatar"
                alt="avatar"
              />
              <h4 className="text-center mt-2 owner-login">{repos[0].owner.login}</h4>
              <a
                rel="noreferrer"
                target="_blank"
                href={repos[0].owner.html_url}
                className="text-decoration-none owner-link"
              >
                Go to GitHub
              </a>
            </>
          }
        </div>
        <div className="list-section">
          <div className="container border border-primary repository-list">
            {currentRepos.map(function (repo) {
              return (
                <div
                  key={repo.id}
                  className="row d-flex my-2 border border-primary repository-item"
                >
                  <div className="col">
                    <p className="repository-name">{repo.full_name}</p>
                    <p className="repository-language">{repo.language}</p>
                  </div>
                  <div className="col">
                    <p className="repository-update">Last update: {repo.pushed_at}</p>
                  </div>
                  <div className="col d-flex justify-content-end repository-links">
                    <span className="d-inline-flex justify-content-end">
                      <p className="repository-stars">Stars counter: {repo.stargazers_count}</p>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="d-flex gap-2"
                        href={repo.html_url}
                      >
                        <i className="bi bi-star github-icon"></i>
                        <i className="bi bi-box-arrow-up-right github-icon"></i>
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <nav className="mt-3" aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {Array(Math.ceil(repos.length / itemsPerPage))
                .fill()
                .map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
                  >
                    <button
                      onClick={() => paginate(i + 1)}
                      className="page-link"
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Repositorios;
