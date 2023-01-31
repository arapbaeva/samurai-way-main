import React, {ChangeEvent} from 'react';


type ProfileStatusType = {
    status: string
    updateStatusThunkCreator: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    // statusInputRef: RefObject<HTMLInputElement> = React.createRef()
    state: StateType = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status)
    }

    onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:  event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)}
                           value={this.state.status}/>
                </div>
            }
        </>
    }
}

