
import React, {Component} from 'react' 

class BookDisplay extends Component{

    render() {

        const bookItems = this.props.books.map(book => {
               return <div class="row">
                   <li>
                   
                   <img src = {'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/' + book.imageLink} />
                   <br></br>
                   <label><b>{book.title}</b></label>
                   <br></br>
                   <label> Author: {book.author}</label>
                   <br></br>
                   <label>Published in {book.year}</label>
                   <br></br>
                   <label>Country of origin: {book.country}</label>



                  
                  
                </li>
               </div>
           })

        return(
            <ul>{bookItems}</ul>
            
        )
    }


}


export default BookDisplay