import React from 'react'
import { Table } from 'reactstrap'
import { getReminders, deleteReminder } from '../../../actions/actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {

  componentDidMount() {
    this.props.getReminders('/reminders/', this.props.user_id)
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          height: '95.5vh',
          backgroundColor: '#343a40',
          overflow: 'scroll'
        }}
      >
        <Table dark
          style={{
            width: '10rem',
            margin: '0',
          }}
        >
          <thead>
            <tr>
              <th>Saved Events</th>
            </tr>
          </thead>
          {
            !this.props.loggedin &&
            <tbody>
              <tr>
                <th>
                  Please <Link to="/user/login">login</Link> to save reminders
                </th>
              </tr>
            </tbody>
          }
          {
            this.props.reminders.length > 0 &&
            this.props.reminders.map(rem => {
              return (<tbody key={rem.reminder_id}>
                <tr>
                  <th scope='column'>
                    {rem.description}
                    <p
                      style={{
                        fontSize: '.5rem',
                        color: 'red',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => this.props.deleteReminder('/reminders/', rem.reminder_id)}>remove</p>
                  </th>
                </tr>
              </tbody>)
            })
          }
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedin: state.user.loggedin,
    reminders: state.user.reminders,
    user_id: state.user.user_id
  }
}

export default connect(mapStateToProps, { getReminders, deleteReminder })(Sidebar)