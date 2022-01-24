set(GPU_SRC_LIST
    "main.cpp"
    "shaders/shader.vert"
    "shaders/shader.frag")

add_executable(${GPU_EXECUTABLE_NAME} ${GPU_SRC_LIST})

source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${GPU_SRC_LIST})

target_include_directories(${GPU_EXECUTABLE_NAME} PUBLIC
                           "${CMAKE_CURRENT_SOURCE_DIR}")

#find_package(OpenGL)
find_package(Vulkan REQUIRED)

target_link_libraries(${GPU_EXECUTABLE_NAME} PUBLIC
                        glad
                        glfw
                        ${OPENGL_gl_LIBRARY})
