import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as CourseActions from "../../store/actions/course";


const SideBar = ({modules, toggleLesson}) => (
  <>
    <aside>
      {modules.map((module) => {
        return (
          <>
            <div key={module.id}>
              <strong>{module.title}</strong>
              <ul>
                {module.lessons.map((lesson) => {
                  return <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => toggleLesson(module, lesson) }>Selecionar</button>
                    </li>
                })}
              </ul>
            </div>
          </>
        );
      })}
    </aside>
  </>
);

const mapStateToProps = state => ({
  modules: state.course.modules
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);