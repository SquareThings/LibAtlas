import React from 'react';
import '../App.css';

function NYC() {
    return (
        <div>
            <div style={{ height: "70vh" }}>
                <h1 className="headerMapText"> Map of Prostitution and Massage Arrests In NYC</h1>
                <h2 className="headerMapTextTwo">Background</h2>
                <div className="mapTextContainer2"><p className="mapText">
                    In March 2021 the Manhattan DA’s office announced that it would no longer prosecute people charged on counts of prostitution, and closed over 1,000 open prostitution related cases.  {'\n'} While this follows a nationwide trend towards the decriminalization of sex work, migrant massage workers have become ensnared in a particular type of racialized policing of sex and low wage work.</p></div>
                <h2 className="headerMapTextTwo">Ongoing Work</h2>
                <div className="mapTextContainer2"><p className="mapText">
                    We are working to expand our analysis of state surveillance and policing of migrant massage and sex workers beyond arrests by examining building code and housing violations issued by the New York Department of Buildings and New York Department of Housing Preservation and Development (HPD). In announcing in April of 2021 that it would no longer prosecute people charged on counts of prostitution, the Manhattan DA’s office reflects some movement away from the explicit policing of sex workers. We seek to understand whether there is data to support that explicit policing is being replaced with more implicit exercises of state power that still have serious negative impacts on migrant massage and sex workers. We are currently in the process of examining the overlap between locations of violations and of massage parlors by scraping and cleaning location data from sources such as RubMaps and Google Reviews and matching this data with housing violations data published by NYDOB and NYHPD. </p></div>
            </div>
            <iframe class="embedMap" src="https://ssompal1.github.io/LiberationAtlasMap/public/index" title="NYC Map of Prostitution and Massage Arrests"></iframe>

        </div >
    );
}

export default NYC;