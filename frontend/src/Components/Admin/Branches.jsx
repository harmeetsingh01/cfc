import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    Create,
    SimpleForm,
    TextInput,
    Edit
} from 'react-admin';

export function BranchList(props) {
    return (
        <List {...props} >
            <Datagrid rowClick="edit">
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='manager' />
                <TextField source='mail' />
                <EditButton basePath='/branches' />
                <DeleteButton basePath='/branches' />
            </Datagrid>
        </List>
    )
}

export function BranchCreate(props) {
    return (
        <Create title='Create Branch' {...props} >
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='manager' />
                <TextInput source='address' />
                <TextInput source='mail' />
                <TextInput source='contact' />
                <TextInput source='image' />
                <TextInput source='info' />
            </SimpleForm>
        </Create>
    )
}

export function BranchEdit(props) {
    return (
        <Edit undoable={false} title='Edit Branch' {...props} >
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='manager' />
                <TextInput source='address' />
                <TextInput source='mail' />
                <TextInput source='contact' />
                <TextInput source='image' />
                <TextInput source='info' />
            </SimpleForm>
        </Edit>
    )
}