import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Calendar from './Calendar';
import Stats from './Stats';
const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
class UserDetails extends Component {
    render() {
        const {
            location: { data },
            classes
        } = this.props;

        if (data) {
            return (
                <div>
                    <Typography
                        variant="h3"
                        gutterBottom
                        className={classes.title}
                    >
                        {data.first_name + ' ' + data.last_name}
                    </Typography>
                    <div className={classes.container}>
                        <Calendar events={data.events} />
                        <Stats />
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/" />;
        }
    }
}

UserDetails.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(UserDetails);
