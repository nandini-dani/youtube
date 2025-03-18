import React from 'react';

const commentData = [
  {
    name: 'Nandini Dani',
    text: 'ipsum lipsum iodi nindum ipsum lipsum',
    replies: [
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [
          {
            name: 'Nandini Dani',
            text: 'ipsum lipsum iodi nindum ipsum lipsum',
            replies: [
              {
                name: 'Nandini Dani',
                text: 'ipsum lipsum iodi nindum ipsum lipsum',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [],
      },
    ],
  },
  {
    name: 'Nandini Dani',
    text: 'ipsum lipsum iodi nindum ipsum lipsum',
    replies: [
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [],
      },
    ],
  },
  ,
  {
    name: 'Nandini Dani',
    text: 'ipsum lipsum iodi nindum ipsum lipsum',
    replies: [
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [],
      },
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [],
      },
      {
        name: 'Nandini Dani',
        text: 'ipsum lipsum iodi nindum ipsum lipsum',
        replies: [
          {
            name: 'Nandini Dani',
            text: 'ipsum lipsum iodi nindum ipsum lipsum',
            replies: [],
          },
          {
            name: 'Nandini Dani',
            text: 'ipsum lipsum iodi nindum ipsum lipsum',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Nandini Dani',
    text: 'ipsum lipsum iodi nindum ipsum lipsum',
    replies: [],
  },
  {
    name: 'Nandini Dani',
    text: 'ipsum lipsum iodi nindum ipsum lipsum',
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="bg-gray-50 px-4 py-2 m-2">
      <div className="bold">{name}</div>
      <div>{text}</div>
    </div>
  );
};

const CommentList = ({ comments }) =>
  comments.map((comment, id) => (
    <div key={id}>
      <Comment data={comment} />
      <div className="pl-5 ml-4">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));

const CommentContainer = () => {
  return (
    <div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
