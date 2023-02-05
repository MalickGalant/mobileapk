import React from 'react';
import AdSense from '../lib/index';

const MainComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Mobile React App</h1>
        <p>
          Project <a href="https://github.com/malickgalant/mobileapk">React-Adsense</a> is a React-component for Google AdSense / Baidu advertisement.
        </p>

        <h2>Install </h2>
        <pre className="strong"> npm install react-adsense </pre>

        <p>Then import it. </p>
        <pre>{"//import library use script tag.\n\nimport AdSense from 'react-adsense';"}
        </pre>

        <h2>Ads Usage</h2>
        <pre>{"import AdSense from 'react-adsense';\n\n<AdSense.Google\n\tclient='ca-pub-7292810486004926'\n\tslot='7806394673'\n/>"}

        </pre>

        <h2> Default props </h2>
        <AdSense.Google client='ca-pub-7292810486004926'
                        slot='7806394673' />

        <h2>Article's Trending</h2>

        <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            layout='in-article'
        />

        <h2>Full Demo</h2>
        <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{width: 500, height: 300, float: 'left'}}
            layout='in-article'
            format=''
        />
        <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{width: 500, height: 300, float: 'left'}}
            layout='in-article'
            format=''
        />
      </div>
    );
  }
});

export default MainComponent;
