import React, { Component } from 'react';

class DisplayUsers extends Component{
	render(){
    	console.log('props', this.props);
    	return(

			<ol className='user-display'> 
          		{this.props.profiles.map((profiles)=>{
          			const user = this.props.users[profiles.userID].name;
            		const movie = this.props.movies[profiles.favoriteMovieID].name;
          			return (
                    	<li key={this.props.profiles.id}> 
                      		<p>{`${user}'s favorite movie is "${movie}."`}</p>
              			</li>
					);
        })}
          	</ol>
    	)
    }
}

export default DisplayUsers