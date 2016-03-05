# react-inform

Forms are not currently fun to work with in React.  There are a lot of form libraries out there, but a lot of them have issues making them a pain to work with.  These issues include:

* You have to use provided input / form components rather than whatever components you want.
* The provided inputs can have bugs and inconsistencies with the built-in components.
* You are forced into using refs to call methods on components.
* Validations are not straightforward, and you cannot validate across fields (like having two different inputs that should have the same value).

`react-inform` is a form library for React that avoids all of these issues.

## Guide

`react-inform` provides a simple decorator.  To that decorator you provide a list of fields in the form, and an optional validate function.  The `validate` function takes in an object where the keys are fieldnames and the values are the values of the fields, and it should return an object where the keys are fieldnames and the values are error strings.

We can configure a simple form that
