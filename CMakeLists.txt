cmake_minimum_required(VERSION 3.18.0)

set(PROJECT_NAME "CPP_RayTracer")
set(EXECUTABLE_NAME "raytracer")

project(${PROJECT_NAME} VERSION 1.0)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)

add_subdirectory(src)