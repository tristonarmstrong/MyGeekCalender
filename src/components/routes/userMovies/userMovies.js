//default imports
import React from 'react';
import EventTable from '../globalComponents/table.js'
//name imports
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import { getReminders } from '../../../actions/actions'
//style imports
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class UserMovies extends React.Component {
    state = {
        data: null,
    }


    componentDidMount() {
        this.props.getReminders('/reminders/', this.props.user_id)
    }


    render() {
        return (
            <>
                <EventTable
                    title={this.props.isFetching && <div style={{ fontSize: '2.5rem', textAlign: 'center', margin: '100px 0', padding: '0 100px' }}>
                        <Spinner
                            style={{ width: '3rem', height: '3rem' }} />
                    </div> ||
                        !this.props.isFetching &&
                        <div style={{ fontSize: '2.5rem', textAlign: 'center', margin: '100px 0', padding: '0 100px' }}>
                            <h1>Your Saved Events</h1>
                            <p style={{ fontSize: '2rem', fontWeight: '300' }}>All of your saved events in one place. Never miss a movie, game, etc...</p>
                        </div>}

                    data={this.props.reminders}
                    reminders
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        reminders: state.user.reminders,
        user_id: state.user.user_id
    }
}

export default connect(mapStateToProps, { getReminders })(UserMovies)