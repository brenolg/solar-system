import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    console.log(this.props)
        return (
            <div data-testid="solar-system">
                <Title headline = "Planetas"/>
            </div>
        );
  }
}

export default SolarSystem;