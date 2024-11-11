
import { homedetails } from './../data/js/home.js';
import { songs } from './../data/js/songData.js';

document.addEventListener("DOMContentLoaded", () => {

    let currentIndex = 0;
    let watchlist = [];
    let currentNewsIndex = 0;


    const carouselContainer = document.getElementById('carousel-container');

    function renderCarousel() {
        carouselContainer.innerHTML = '';
        homedetails.images.forEach((image, index) => {
            const div = document.createElement('div');
            div.className = 'carousel-box relative';
            div.style.display = index === currentIndex ? 'block' : 'none';
            div.innerHTML = `
                <img src="${image}" alt="carousel-${index}" />
                <div class="watchlist-button flex gap-2 items-center absolute px-[40px] py-[9px] border-[3px] border-white rounded-xl bottom-[8%] left-[5%] cursor-pointer drop-shadow-[0_0_4px_4px_rgba(0,0,0,0.25)] ">
                    <img src="${watchlist.includes(image) ? '../src/assets/icons/check.svg' : '../src/assets/icons/play1.svg'}" alt="icon" class="w-[32px]" />
                    <h1 class="font-helvetica font-black text-[32px]">${watchlist.includes(image) ? 'Added to Watchlist' : 'Add to Watchlist'}</h1>
                </div>
            `;
            div.querySelector('.watchlist-button').addEventListener('click', () => toggleWatchlist(image));
            carouselContainer.appendChild(div);
        });
    }


    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % homedetails.images.length;
            renderCarousel();
        }, 3000);
    }

    function trendingNewsCarousel() {
        setInterval(() => {
            currentNewsIndex = (currentNewsIndex + 1) % homedetails.movies.length;
            renderTrendingNews();
        }, 3000);
    }


    function toggleWatchlist(movie) {
        if (watchlist.includes(movie)) {
            watchlist = watchlist.filter((item) => item !== movie);
        } else {
            watchlist.push(movie);
        }
        renderCarousel();
    }

    const trendingNewsContainer = document.getElementById('trending-news-container');

    function renderTrendingNews() {
        const { url, title, description } = homedetails.movies[currentNewsIndex];
        trendingNewsContainer.innerHTML = `
            <div class="movie-carousel h-[400px] items-center flex text-white rounded-[10px] ml-[4rem] pt-[1.5rem] gap-[25px]  ">
                        <div class="movie-image  ">
                            <img src=${url} alt=${title} class=' min-w-[283px] w-[283px] h-[267px]  rounded-[25px] object-cover transition-opacity duration-[1s] ease-in-out ' />
                        </div>
                        <div class="movie-details text-white flex flex-col  pt-[10px] justify-between gap-[1rem]">
                            <h2 class='text-white font-medium self-start text-[28px] mb-[10px] leading-[40px]'>${title}</h2>
                            <p class='text-[#666666] font-normal text-[18px] text-ellipsis  mb-[20px] ' >${description}</p>
                            <button class="read-more w-fit bg-orangelite rounded-[10px] py-[6px] px-[19px] font-bold mt-auto text-[24px]">Read more</button>
                        </div>
                    </div>
        `;
    }


    // Event Section
    const eventsContainer = document.getElementById('event-cards');

    function renderEvents() {
        homedetails.eventMovies.forEach((event) => {
            eventsContainer.innerHTML += `
                <div className='event-cards min-h-[350px] w-[100%]'>
                                        <img src='../../../src/assets/images/home/${event.image}' alt='${event.name}' class='min-w-[300px] h-[284px] rounded-t-[20px]' />
                                        <div class="offer-conatiner flex justify-between bg-[#BCB4A5] rounded-b-[20px] px-[25px] py-1 items-center">
                                            <div class='duration'>
                                                <ul class='flex time-stamp gap-3'>
                                                    <li>00<span>Days</span></li>
                                                    <li>00<span>Hrs</span></li>
                                                    <li>00<span>Mins</span></li>
                                                    <li>00<span>secs</span></li>
                                                </ul>
                                            </div>

                                            <a href='${event.link}' class=' bg-orangelite content-center rounded-[15px] ml-[3rem] text-white font-semibold w-[158px] h-[56px] text-center text-[24px] p-[10px] capitalize'> Buy tickets</a>
                                        </div>
                                    </div>
            `;
        });
    }

    
    const latestMoviesContainer = document.getElementById('latest-movies');

    function renderLatestMovies() {
        homedetails.latestMovies.forEach((movie) => {
            latestMoviesContainer.innerHTML += `
                <img src="../src/assets/images/movies/${movie.image}" alt="${movie.title}" class="w-[256px] h-[321px]rounded-[10px]" />
            `;
        });
    }

    const currentTrackImage = document.getElementById('currentTrackImage');
    const currentTrackTitle = document.getElementById('currentTrackTitle');
    const currentTrackArtist = document.getElementById('currentTrackArtist');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const playlistContainer = document.getElementById('playlistContainer');

    let currentSongIndex = 0;
    let isPlaying = false;
    playPauseIcon.addEventListener('click', togglePlayPause);
    
    function loadPlaylist() {
        playlistContainer.innerHTML = ''; 
        songs.forEach((song, index) => {
            const trackElement = document.createElement('div');
            trackElement.className = 'track cursor-pointer';
            trackElement.innerHTML = `
                <img src="${song.image}" alt="${song.title}" class="w-[197px] h-[266px] object-cover">
                <p class="text-[25px] font-semibold text-nowrap w-[197px] overflow-x-scroll scrollbarhide">${song.title}</p>
                <p class="text-[18px] text-[#666666] font-normal text-nowrap w-[197px] overflow-x-scroll scrollbarhide">${song.artist}</p>
            `;
            trackElement.addEventListener('click', () => {
                loadSong(index);
            });
            playlistContainer.appendChild(trackElement);
        });
    }


    function loadSong(index) {
        currentSongIndex = index;
        const song = songs[index];
        currentTrackImage.src = song.image;
        currentTrackTitle.textContent = song.title;
        currentTrackArtist.textContent = song.artist;
        playPauseIcon.src = '../src/assets/icons/play.svg'; 
        isPlaying = false;
    }

    
    function togglePlayPause() {
        if (isPlaying) {
            playPauseIcon.src = '../src/assets/icons/play.svg';
            isPlaying = false;
           
        } else {
            playPauseIcon.src = '../src/assets/icons/pause.svg';
            isPlaying = true;
           
        }
    }


    loadPlaylist();
    loadSong(0);
    renderCarousel();
    renderTrendingNews();
    renderEvents();
    renderLatestMovies();
    startCarousel();
    trendingNewsCarousel();

});
