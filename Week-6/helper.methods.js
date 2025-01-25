class Helpers {
    filterMatchesByLocationAndStatus(response) {
        

       // Your code here
       // Challenge 1: Filter Matches by Location and Status
       // Write a function to find all matches where "locationlvl1" = "Germany" and "status" = "canceled" in the array.
       // The function should return an array of "matchId"s of the matches.

       const filteredMatches = response.matches.filter(match => 
        match.locationlvl1 === "Germany" && match.status === "canceled"
      );
  
      // Return new array
      const matchIds = filteredMatches.map(match => match.matchId);
      return matchIds;


        //return users; //what is this?
    }

    filterMatchesByCoatingAndShower(response) {
        

        // Your code here
        const filteredMatches = response.matches.filter(match => 
            match.matchInfo.coating === "Main.artificialGrass" && match.matchInfo.isShower === true
          );
      
          // Return an array of matchIds from the filtered matches for object response
          const matchIds = filteredMatches.map(match => match.matchId);
          return matchIds;

        //return result; //what is this?
    }

    filterMatchesByLocationAndPrice(response) {
        
        // Your code here

        const filteredMatches = response.matches.filter(match => 
            match.locationlvl2 === "Berlin" && match.price > 0
          );
      
          // Return an array of matchIds from the filtered matches
          const matchIds = filteredMatches.map(match => match.matchId);
          return matchIds;


        return result;
    }

    filterMatchesByCreatorFeeAndStatus(response) {
        

        // Your code here
         // Filter the matches where creatorFeePerPlayer > 3 and status is "canceled"
    const filteredMatches = response.matches.filter(match => 
        match.creatorFeePerPlayer > 3 && match.status === "canceled"
      );
  
      // Return an array of matchIds from the filtered matches
      const matchIds = filteredMatches.map(match => match.matchId);
      return matchIds;

        return result;
    }

    filterMatchesByCoveringAndDressingRoom(response) {
        
        // Your code here

        const filteredMatches = response.matches.filter(match => 
            match.matchInfo.covering === "Main.onTheStreet" && match.matchInfo.isDressingRoom === true
          );
      
          // Return an array of matchIds from the filtered matches
          const matchIds = filteredMatches.map(match => match.matchId);
          return matchIds;

        return result;
    }
}

export default new Helpers()