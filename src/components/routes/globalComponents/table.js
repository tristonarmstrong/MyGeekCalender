import React from 'react'
import Movie from '../globalComponents/movie'
import { Table } from 'reactstrap';
import icon from '../../../images/def_avatar.jpg'


class EventTable extends React.Component {
    render() {


        return (
            <>
                <h1>{this.props.title}</h1>
                <Table dark className='table'>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Event Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.data.length < 1 && <Movie
                            key={'null'}
                            icon={'null'}
                            cat={'null'}
                            des={'no current events'}
                            date={'null'}
                            hashtags={[]}
                        />}
                        {
                            this.props.data.length > 0 && this.props.data.map(movie => {

                                return <Movie
                                    key={movie.event_id}
                                    id={movie.event_id}
                                    icon={icon}
                                    cat={movie.category}
                                    des={movie.description}
                                    date={movie.event_date}
                                    hashtags={movie.hashtags || []}
                                    reminder_id={movie.reminder_id}
                                    reminders={this.props.reminders}
                                />
                            })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default EventTable