cmake_minimum_required(VERSION 3.18.0)

set(PROJECT_NAME "RayTracer")
set(CPU_EXECUTABLE_NAME "cpu-raytracer")
set(GPU_EXECUTABLE_NAME "gpu-raytracer")

include(${CMAKE_SOURCE_DIR}/cmake/set_startup_project.cmake)

project(${PROJECT_NAME} VERSION 1.0)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)

set(VENDOR_DIR "${CMAKE_SOURCE_DIR}/vendor")
set(GLFW_BUILD_DOCS OFF)
add_subdirectory(${VENDOR_DIR}/glfw)
add_subdirectory(${VENDOR_DIR}/glad)
add_subdirectory(${VENDOR_DIR}/glm)

set(DEFAULT_LIBS_DIR libs)
set(GLFW_LIBS_DIR ${DEFAULT_LIBS_DIR}/GLFW3)

# All projects that glfw can add
set_target_properties(glfw PROPERTIES FOLDER ${GLFW_LIBS_DIR})
set_target_properties(uninstall PROPERTIES FOLDER ${GLFW_LIBS_DIR})
set_target_properties(update_mappings PROPERTIES FOLDER ${GLFW_LIBS_DIR})

# Other projects
set_target_properties(glad PROPERTIES FOLDER ${DEFAULT_LIBS_DIR})
set_target_properties(glm PROPERTIES FOLDER ${DEFAULT_LIBS_DIR})


add_subdirectory(cpu)
add_subdirectory(gpu)

set_startup_project(${CPU_EXECUTABLE_NAME})