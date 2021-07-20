import React from 'react';
import { SidebarData, PatchNotes, PostFlairs } from './Data';

const Sidebar = () => {
    const postFlairPrefix =
        'https://old.reddit.com/r/apexlegends/search?sort=new&restrict_sr=on&q=flair%3A';
    return (
        <div id='sidebar'>
            <div id='submit-post-div'>
                <a id='submit-link' href='#'>
                    submit a new link
                </a>
                <a id='submit-text' href='#'>
                    submit a new text post
                </a>
                {/* <form id='submit-text-form' onSubmit={addPost}>
                    <textarea required id='title-input' className='form-items' name='title' value={post.title} placeholder='title' rows='3' cols='16' onChange={handleChange} />
                    <textarea required id='text-input' className='form-items' name='textContent' value={post.textContent} placeholder='text' rows='10' cols='16' onChange={handleChange} />
                    <input required type='text' id='username-input' className='form-items' name='username' value={post.username} placeholder='username' onChange={handleChange} />
                    <button id='submit-button' className='submit-post-items'>submit</button>
                </form>  */}
            </div>
            <div id='sidebar-misc' className='sidebar-divs'>
                <a id='join' className='sidebar-links' href='#'>
                    join
                </a>
                <a
                    id='rules'
                    className='sidebar-links'
                    href='https://old.reddit.com/r/apexlegends/wiki/rules'>
                    rules
                </a>
                <p id='description'>{SidebarData.subredditInfo}</p>
            </div>
            <div id='download-links' className='sidebar-divs'>
                <h4 className='sidebar-headings'>download for free</h4>
                <ul>
                    <li>
                        <a
                            id='pc-download-link'
                            href='https://www.origin.com/en-us/store/apex/apex'>
                            PC
                        </a>
                    </li>
                    <li>
                        <a
                            id='ps-download-link'
                            href='https://store.playstation.com/en-us/product/UP0006-CUSA12540_00-APEXLEGENDRSPWN1'>
                            PlayStation
                        </a>
                    </li>
                    <li>
                        <a
                            id='xbox-download-link'
                            href='https://www.microsoft.com/en-us/p/apex-legends/bv9ml45j2q5v?activetab=pivot:overviewtab'>
                            Xbox
                        </a>
                    </li>
                </ul>
            </div>
            <div id='patch-notes' className='sidebar-divs'>
                <h4 className=' sidebar-headings'>patch notes</h4>
                <ul>
                    <li>
                        <a id='current-patch' href={PatchNotes.current}>
                            Current Patch (Jun 29)
                        </a>
                    </li>
                    <li>
                        <a id='previous-patch=notes' href={PatchNotes.previous}>
                            Previous Patch Notes
                        </a>
                    </li>
                </ul>
            </div>
            <div id='quick-links' className='sidebar-divs'>
                <h4 className='sidebar-headings'>quick links</h4>
                <ul>
                    <li>
                        <a
                            id='report-cheater'
                            href='https://www.easy.ac/en-us/support/apexlegends/contact/report/'>
                            Report a Cheater
                        </a>
                    </li>
                    <li>
                        <a
                            id='report-bug'
                            href='https://answers.ea.com/t5/Bug-Reports/bd-p/apex-legends-bug-reports-en'>
                            Report a Bug
                        </a>
                    </li>
                    <li>
                        <a
                            id='troubleshooting-crashes'
                            href='https://answers.ea.com/t5/Technical-Issues/Community-Crashing-Troubleshooting-Guide/td-p/7447308'>
                            Troubleshooting Crashes
                        </a>
                    </li>
                    <li>
                        <a
                            id='dev-bug-tracker'
                            href='https://trello.com/b/ZVrHV38P/apex-tracker'>
                            Dev Bug Tracker
                        </a>
                    </li>
                </ul>
            </div>
            <div id='related-subreddits' className='sidebar-divs'>
                <h4
                    id='related-subreddits-heading'
                    className='sidebar-headings'>
                    related subreddits
                </h4>
                <ul>
                    <li>
                        <a
                            id='apex-outlands'
                            href='https://old.reddit.com/r/ApexOutlands/'>
                            Apex Outlands - Memes
                        </a>
                    </li>
                    <li>
                        <a
                            id='apex-lfg'
                            href='https://old.reddit.com/r/ApexLFG/'>
                            Dedicated Apex LFG
                        </a>
                    </li>
                    <li>
                        <a
                            id='competitive-apex'
                            href='https://old.reddit.com/r/CompetitiveApex/'>
                            /r/CompetitiveApex
                        </a>
                    </li>
                    <li>
                        <a
                            id='apex-lore'
                            href='https://old.reddit.com/r/ApexLore/'>
                            /r/ApexLore
                        </a>
                    </li>
                    <li>
                        <a
                            id='apex-university'
                            href='https://old.reddit.com/r/ApexUniversity/'>
                            /r/ApexUniversity
                        </a>
                    </li>
                    <li>
                        <a
                            id='titanfall'
                            href='https://old.reddit.com/r/titanfall/'>
                            /r/titanfall
                        </a>
                    </li>
                </ul>
            </div>
            <div id='resources' className='sidebar-divs'>
                <h4 id='resources-heading' className='sidebar-headings'>
                    resources
                </h4>
                <ul>
                    <li>
                        <a
                            id='about-apex-legends'
                            href='https://www.ea.com/games/apex-legends/about'>
                            About Apex Legends
                        </a>
                    </li>
                    <li>
                        <a
                            id='beginners-guide'
                            href='https://www.ea.com/games/apex-legends/news/apex-legends-beginners-guide-tips-and-tricks'>
                            Beginner's Guide
                        </a>
                    </li>
                    <li>
                        <a
                            id='characters'
                            href='https://www.ea.com/games/apex-legends/about/characters'>
                            Characters
                        </a>
                    </li>
                    <li>
                        <a
                            id='faq'
                            href='https://www.ea.com/games/apex-legends/about/frequently-asked-questions'>
                            Frequently Asked Questions
                        </a>
                    </li>
                    <li>
                        <a
                            id='news'
                            href='https://www.ea.com/games/apex-legends/news'>
                            News
                        </a>
                    </li>
                    <li>
                        <a
                            id='pc-system-requirements'
                            href='https://www.ea.com/games/apex-legends/about/pc-system-requirements'>
                            PC System Requirements
                        </a>
                    </li>
                </ul>
            </div>
            <div id='search-by-flair-div' className='sidebar-divs'>
                <h4 id='search-by-flair-heading' className='sidebar-headings'>
                    search by flair
                </h4>
                <div id='post-flairs-div'>
                    {PostFlairs.map(postFlair => {
                        return (
                            <a
                                key={postFlair}
                                className='post-flairs'
                                href={postFlairPrefix + postFlair}>
                                {postFlair}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
