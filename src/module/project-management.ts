import { AddProjectMessageRequest, AddProjectMessageResponse } from "../interface/project-management/add-project-message";
import { AddProjectTaskRequest, AddProjectTaskResponse } from "../interface/project-management/add-project-task";
import { CreateProjectRequest, CreateProjectResponse } from "../interface/project-management/create-project";
import { DeleteProjectTaskRequest, DeleteProjectTaskResponse } from "../interface/project-management/delete-project-task";
import { EndTaskTimerRequest, EndTaskTimerResponse } from "../interface/project-management/end-task-timer";
import { GetProjectRequest, GetProjectResponse } from "../interface/project-management/get-project";
import { GetProjectsRequest, GetProjectsResponse } from "../interface/project-management/get-projects";
import { StartTaskTimerRequest, StartTaskTimerResponse } from "../interface/project-management/start-task-timer";
import { UpdateProjectRequest, UpdateProjectResponse } from "../interface/project-management/update-project";
import { UpdateProjectTaskRequest, UpdateProjectTaskResponse } from "../interface/project-management/update-project-task";
import { BaseModule } from "./base";

export class WhmcsProjectManagementService extends BaseModule {
  
  public async addProjectMessage(options: AddProjectMessageRequest): Promise<AddProjectMessageResponse> {
    return this.request('AddProjectMessage', options);
  }

  public async addProjectTask(options: AddProjectTaskRequest): Promise<AddProjectTaskResponse> {
    return this.request('AddProjectTask', options);
  }

  public async createProject(options: CreateProjectRequest): Promise<CreateProjectResponse> {
    return this.request('CreateProject', options);
  }

  public async deleteProjectTask(options: DeleteProjectTaskRequest): Promise<DeleteProjectTaskResponse> {
    return this.request('DeleteProjectTask', options);
  }

  public async endTaskTimer(options: EndTaskTimerRequest): Promise<EndTaskTimerResponse> {
    return this.request('EndTaskTimer', options);
  }

  public async getProject(options: GetProjectRequest): Promise<GetProjectResponse> {
    return this.request('GetProject', options);
  }

  public async getProjects(options: GetProjectsRequest): Promise<GetProjectsResponse> {
    return this.request('GetProjects', options);
  }

  public async startTaskTimer(options: StartTaskTimerRequest): Promise<StartTaskTimerResponse> {
    return this.request('StartTaskTimer', options);
  }

  public async updateProject(options: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    return this.request('UpdateProject', options);
  }

  public async updateProjectTask(options: UpdateProjectTaskRequest): Promise<UpdateProjectTaskResponse> {
    return this.request('UpdateProjectTask', options);
  }
  
}