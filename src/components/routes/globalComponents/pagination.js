import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux'
import { getData } from '../../../actions/actions'
import '../movies/index.css'
import './index.css'

class PaginationMovie extends React.Component {

    tabupOne = () => {
        this.props.getData('/events/', this.props.active + 1)
    }

    tabdownOne = async () => {
        this.props.getData('/events/', this.props.active - 1)
    }


    render() {

        return (
            <Pagination aria-label="Page navigation example" className='pagination'>

                <PaginationItem disabled={this.props.active === 1} className='pag_item'>
                    <PaginationLink previous
                        onClick={(e => {
                            e.preventDefault()
                            this.tabdownOne()
                        })} />
                </PaginationItem>


                {
                    this.props.tabs.map(tab => {
                        return (<PaginationItem key={tab} className='pag_num' active={this.props.active === tab}>
                            <PaginationLink
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.props.getData('/events/', tab) //sends page number to movielist component

                                }
                                }
                            >
                                {tab}
                            </PaginationLink>
                        </PaginationItem>)

                    })
                }


                <PaginationItem className='pag_item'>
                    <PaginationLink next
                        onClick={(e => {
                            e.preventDefault()
                            this.tabupOne()
                        })} />
                </PaginationItem>

            </Pagination>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        active: state.pagination.active,
        tabs: state.pagination.tabs
    }
}

export default connect(mapStateToProps, { getData })(PaginationMovie)