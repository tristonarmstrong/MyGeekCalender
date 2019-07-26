import React from 'react'
import { Badge, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../../../actions/actions'

class Movie extends React.Component {


    render() {
        return (
            <tr> {/*  creates a movie row */}
                <th className='thstyle sub_th' scope="row">
                    <img
                        className='avatar'
                        alt='movie'
                        src={this.props.icon}
                    />
                    <div className='hash_cont'>
                        {this.props.hashtags.map(tag =>
                            <Badge
                                key={tag.hashtag_id}
                                className='badge'
                                color="primary"
                                href="#">
                                {tag.internal_name}
                            </Badge>
                        )}
                    </div>
                </th>

                <td><a href="#">{this.props.cat}</a></td>
                <td>{this.props.des}</td>
                <td>{new Date(this.props.date).toDateString()} {' '}
                    {!this.props.reminders && <Button
                        onClick={e => {
                            e.preventDefault()
                            let reminder = {
                                "event_id": this.props.id,
                                "user_id": this.props.user_id,
                                "reminder_days": 7,
                                "reminder_method": "email"
                            }
                            this.props.addReminder('/reminders', reminder)
                        }}
                    >Remind me</Button>}
                    {this.props.reminders && <p
                        style={{
                            fontSize: '.5rem',
                            color: 'red',
                            cursor: 'pointer'
                        }}
                        onClick={(e) => this.props.deleteReminder('/reminders/', this.props.reminder_id)}>remove</p>}
                </td>

            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_id: state.user.user_id
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(Movie)