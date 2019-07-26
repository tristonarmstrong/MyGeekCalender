//default imports
import React from 'react';
import PaginationMovie from '../globalComponents/pagination.js'
import EventTable from '../globalComponents/table.js'
//named imports
import { connect } from 'react-redux'
import { getData } from '../../../actions/actions'
import { Spinner } from 'reactstrap'

//style imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class MoviesTable extends React.Component {


  // once this component mounts it will retrieve the data from the database
  componentDidMount() {
    this.props.getData('/events/')
  }

  

  render() {

    return (
      <div
        style={{
          margin: 'auto',
          paddingLeft: '10rem',
          height: '95vh'
        }
        }
      >
        <EventTable
          title={this.props.isFetching &&
            <div
              style={{ fontSize: '2.5rem', textAlign: 'center', margin: '58px 0', padding: '0 100px' }}>
              <Spinner
                style={{ width: '3rem', height: '3rem' }} /></div> ||
            !this.props.isFetching &&
            <div
              style={{ fontSize: '2.5rem', textAlign: 'center', margin: '58px 0', padding: '0 100px' }}>
              <h1>Upcoming Events</h1>
              <p style={{ fontSize: '2rem', fontWeight: '300' }}>All upcoming events that you may be interested in. Take a look. Save a few!</p>
            </div>}
          data={this.props.data}
        />
        <PaginationMovie />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    data: state.data,
    page: state.page,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getData })(MoviesTable)